<?php

require "./fpdf.php";

$pdf = new FPDF();
$pdf->AddPage('P', [150, 100]);

// Set font properties (optional)
$pdf->SetFont('Arial', 'B', 16);

// Add PNG image to PDF
$imagePath = './tickets/ticket.png'; // Replace with your PNG image path
$pdf->Image($imagePath, 10, 10, 500); // Image(x, y, width)

// Overlay text on PNG image
$text = 'Overlay Text';
$pdf->SetXY(10, 10); // Set position for the text
$pdf->Cell(0, 10, $text, 0, 1, 'C'); // Cell(width, height, text, border, ln, align)

// Output the PDF
$pdf->Output("./tickets/ticket2.pdf", 'F');