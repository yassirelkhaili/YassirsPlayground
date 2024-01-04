<?php

// Path to your image file
$imagePath = "./ticket.png";

// Create image from existing file
$image = imagecreatefrompng($imagePath);
// Set the font size and path to the font file
$fontSize = 24;
$fontPath = './fonts\Noto sans\NotoSans-SemiBoldItalic.ttf';

// Define the text to overlay and its position
$text = "Sample Text";
$textColor = imagecolorallocate($image, 0, 0, 0); // black color
$x = 50; // X-coordinate
$y = 50; // Y-coordinate

$seatNumber = "34723874";

// Add text to image
imagettftext($image, $fontSize, 0, 145, 188, $textColor, $fontPath, $text);
imagettftext($image, 14, 0, 555, 266, $textColor, $fontPath, $seatNumber);
// Set the content type header
header('Content-Type: image/png');

$randomHash = md5(uniqid(rand(), true));

imagepng($image, "tickets/" . $randomHash, ".png");

// Destroy the image to free memory
imagedestroy($image);
?>

