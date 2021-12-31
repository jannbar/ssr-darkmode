// Get the toggle button
const toggleBtn = document.querySelector('#btn-toggle-theme')

// Get the OS theme (boolean)
const systemPrefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches

// Get current active theme (boolean)
const isDarkmode = document.body.classList.contains('dark-theme')

// Check if user has not set a preference (boolean)
const userHasNoPreference = document.body.classList.contains('theme-no-preference')

// Set the theme based on the OS theme if the user has no preference
if (userHasNoPreference && systemPrefersDarkmode) {
  // Toggle the .dark-theme class on the body
  document.body.classList.toggle('dark-theme')

  // Get the new theme, based on if the .dark-theme class exists
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'

  // Update the toggle button
  toggleBtn.innerHTML = `Toggle ${theme === 'dark' ? 'light' : 'dark'}mode`
}

// Listen for a click on the button
toggleBtn.addEventListener('click', function () {
  // Toggle the .dark-theme class on the body
  document.body.classList.toggle('dark-theme')

  // Get the new theme, based on if the .dark-theme class exists
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'

  // Update the toggle button
  toggleBtn.innerHTML = `Toggle ${theme === 'dark' ? 'light' : 'dark'}mode`

  // Save the current theme in a cookie
  document.cookie = `theme=${theme}`

  // Remove the 'theme-no-preference' body class if it exists
  if (document.body.classList.contains('theme-no-preference')) {
    document.body.classList.remove('theme-no-preference')
  }
})
