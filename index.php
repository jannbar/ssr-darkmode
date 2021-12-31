<?php
  $themeClass = '';
  // Check if a theme cookie exists.
  // If so, and the value is 'dark', set the $themeClass to 'dark-theme'
  if (!empty($_COOKIE['theme']) && $_COOKIE['theme'] == 'dark') {
    $themeClass = 'dark-theme';
  }

  // If the cookie doesn't exist (no user preference),
  // set the $themeClass to 'theme-no-preference'
  if(empty($_COOKIE['theme'])) {
    $themeClass = 'theme-no-preference';
  }

  // Set a $isDarkmode boolean based on the $themeClass
  $isDarkmode = $themeClass == 'dark-theme'
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Darkmode</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="<?php echo $themeClass; ?>">
  <h1>Welcome to the dark side!</h1>
  <button id="btn-toggle-theme">Toggle <?php echo $isDarkmode ? 'lightmode' : 'darkmode'; ?></button>

  <script src="script.js"></script>
</body>
</html>