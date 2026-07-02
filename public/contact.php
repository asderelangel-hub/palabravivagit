<?php
/**
 * contact.php — Receptor del formulario de contacto (JUCUM Palabra Viva)
 * Envía por mail() nativo del hosting (cPanel). Sin dependencias, sin cuentas.
 * Responde JSON si el envío es AJAX (fetch); si no, redirige a /gracias (fallback sin JS).
 *
 * Anti-spam: honeypot + trampa de tiempo + límite de enlaces. Sin captcha externo.
 * ⚠️ CAMBIAR $TO por el correo definitivo del campus.
 */

$TO      = 'jucum.palabraviva@gmail.com';      // correo del campus
$FROM    = 'web@jucumpalabraviva.cl';          // remitente del propio dominio (entregabilidad)
$SITE    = 'https://jucumpalabraviva.cl';
$SUBJECT = 'Nuevo contacto desde jucumpalabraviva.cl';

$isAjax = (strtolower($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'xmlhttprequest')
       || (strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false);

function respond($ok, $msg, $code = 200) {
  global $isAjax, $SITE;
  if ($isAjax) {
    header('Content-Type: application/json; charset=UTF-8');
    http_response_code($code);
    echo json_encode(['success' => $ok, 'message' => $msg]);
  } else {
    if ($ok) { header("Location: $SITE/gracias"); }
    else { http_response_code($code); echo $msg; }
  }
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { respond(false, 'Método no permitido', 405); }

// --- Anti-spam ---
// 1) Honeypot: si viene relleno, fingimos éxito y descartamos el envío
if (!empty($_POST['botcheck'])) { respond(true, '¡Gracias! Te responderemos pronto.'); }

function field($k) { return isset($_POST[$k]) ? trim(mb_substr((string)$_POST[$k], 0, 3000)) : ''; }
$name     = field('name');
$email    = field('email');
$phone    = field('phone');
$interest = field('interest');
$message  = field('message');

// 2) Trampa de tiempo: un humano tarda unos segundos en llenar el form
$elapsed = (int) ($_POST['elapsed'] ?? 999);
if ($elapsed < 3) { respond(false, 'Envío demasiado rápido. Inténtalo de nuevo.', 422); }

// 3) Demasiados enlaces = spam
if (preg_match_all('~https?://~i', $message) > 2) { respond(false, 'Tu mensaje parece spam.', 422); }

// --- Validación ---
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
  respond(false, 'Faltan datos obligatorios. Revisa el formulario.', 422);
}

$body =
  "Nuevo mensaje desde el formulario de jucumpalabraviva.cl\n" .
  "----------------------------------------------\n" .
  "Nombre:   $name\n" .
  "Email:    $email\n" .
  "Teléfono: $phone\n" .
  "Interés:  $interest\n\n" .
  "Mensaje:\n$message\n";

$headers  = "From: JUCUM Palabra Viva <$FROM>\r\n";
$headers .= "Reply-To: " . preg_replace('/[\r\n]+/', ' ', $name) . " <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$subjectEnc = '=?UTF-8?B?' . base64_encode($SUBJECT) . '?=';
$ok = @mail($TO, $subjectEnc, $body, $headers);

if ($ok) { respond(true, '¡Gracias! Recibimos tu mensaje y te responderemos a la brevedad.'); }
else { respond(false, 'No pudimos enviar tu mensaje. Por favor escríbenos por WhatsApp.', 500); }
