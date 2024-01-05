<?php

// Path to your image file
$imagePath = "./tickets/ticket.png";

// Create image from existing file
$image = imagecreatefrompng($imagePath);
// Set the font size and path to the font file
$fontSize = 24;
$fontPath = './fonts\Noto sans\NotoSans-SemiBoldItalic.ttf';

// Define the text to overlay and its position
$teamOne = "Bikini Bottom Anchovies";
$teamTwo = "Krusty Krushers";
$price = "22";
$ticketNumber = "1230912";
$address = "Bikini Bottom";
$stadium = "Oyster Stadium";

$textBlack = imagecolorallocate($image, 0, 0, 0); // black color
$textSlate50 = imagecolorallocate($image, 248, 250, 252); // white greyish color
$x = 50; // X-coordinate
$y = 50; // Y-coordinate

$seatNumber = "34723874";

// Add text to image
imagettftext($image, 16, 0, 116, 200, $textSlate50, $fontPath, $teamTwo);
imagettftext($image, 16, 0, 318, 200, $textSlate50, $fontPath, $teamOne);
imagettftext($image, 14, 0, 150, 266, $textSlate50, $fontPath, $address);
imagettftext($image, 14, 0, 340, 266, $textSlate50, $fontPath, $stadium);
imagettftext($image, 24, 0, 600, 200, $textSlate50, $fontPath, $price);
imagettftext($image, 14, 0, 555, 266, $textBlack, $fontPath, $seatNumber);
imagettftext($image, 14, 0, 785, 105, $textBlack, $fontPath, $ticketNumber);
// Set the content type header
header('Content-Type: image/png');

$randomBytes = random_bytes(16); 

$uniqueHash = hash('sha256', $randomBytes);

imagepng($image, "./tickets/" . $uniqueHash . ".png");

// Destroy the image to free memory
imagedestroy($image);
?>

