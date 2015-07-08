<?php
session_start();
session_destroy();
header("Location: mithra/login.php");
?>