// Initialize a flag to keep track of whether the info table has been displayed
let infoDisplayed = false;

document.getElementById('commandInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = this.value.trim();
        const outputDiv = document.querySelector('.terminal-output');
        const newOutput = document.createElement('p');
        newOutput.textContent = `ayoub@elbaraka:~$ ${command}`;
        outputDiv.appendChild(newOutput);

        let response;
        if (infoDisplayed) {
            // Handle commands after the info table has been displayed
            switch (command) {
                case '-s':
                case '-summary':
                    response = `Recent Computer Science graduate with a minor in Communication Studies, seeking a role to apply and further develop my technical and interpersonal skills. Proficient in problem-solving, software design, and coding, with hands-on experience in Bash, C, C++, Java, HTML, Python (Pandas, Numpy), and SQL. Possess strong communication abilities, honed through academic coursework and extracurricular involvement.`;                    
                    break;
                case '-e':
                case '-education':
                    response = `Bachelor of Computer Science - Minor: Communication Studies.\n 
                            Al Akhawayn University, Ifrane, Morocco 2019 – 2024
                    `;
                    break;
                case '-x':
                case '-experience':
                    response = `For the experiences`;
                    break;
                case '-a':
                case '-achievement':
                    response = `For the Achievements`;
                    break;
                case '-c':
                case '-certificates':
                    response = `For the certificates`;
                    break;
                case '-k':
                case '-skills':
                    response = `For the skills`;
                    break;
                case '-n':
                case '-network':
                    response = `For contacts`;
                    break;
                case 'clear':
                    // Clear user-entered commands but keep the initial ASCII art and info prompt
                    outputDiv.innerHTML = `
                <pre class="ascii-art"> 
    ⠀⣰⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣆⠀⠀
    ⣴⠁⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠃⢣⠀
    ⢻⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⢸⠇
    ⠘⡄⢆⠑⡄⠀⠀⠀⠀⠀⢀⣀⣀⣠⣄⣀⣀⡀⠀⠀⠀⠀⠀⢀⠜⢠⢀⡆⠀
    ⠀⠘⣜⣦⠈⢢⡀⣀⣴⣾⣿⡛⠛⠛⠛⠛⠛⡿⣿⣦⣄⠀⡠⠋⣰⢧⠎⠀⠀
    ⠀⠀⠘⣿⣧⢀⠉⢻⡟⠁⠙⠃⠀⠀⠀⠀⠈⠋⠀⠹⡟⠉⢠⢰⣿⠏⠀⠀⠀
    ⠀⠀⠀⠘⣿⡎⢆⣸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣿⣠⢣⣿⠏⠀⠀⠀⠀
    ⠀⠀⠀⡖⠻⣿⠼⢽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠹⣾⠟⢳⡄⠀⠀⠀
    ⠀⠀⠀⡟⡇⢨⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⣇⢠⢿⠇⠀⠀⠀
    ⠀⠀⠀⢹⠃⢻⡤⠚⠀⠀⠀⠀⣀⠀⠀⢀⠀⠀⠀⠀⠙⠢⡼⠀⢻⠀⠀⠀⠀
    ⠀⠀⠀⠸⡓⡄⢹⠦⠤⠤⠤⢾⣇⠀⠀⢠⡷⠦⠤⠤⠴⢺⢁⠔⡟⠀⠀⠀⠀
    ⠀⠀⠀⢠⠁⣷⠈⠓⠤⠤⠤⣞⡻⠀⠀⢸⣱⣤⠤⠤⠔⠁⣸⡆⣇⠀⠀⠀⠀
    ⠀⠀⠀⠘⢲⠋⢦⣀⣠⢴⠶⠀⠁⠀⠀⠈⠁⠴⣶⣄⣀⡴⠋⣷⠋⠀⠀⠀⠀
    ⠀⠀⠀⠀⣿⡀⠀⠀⢀⡘⠶⣄⡀⠀⠀⠀⣠⡴⠞⣶⠀⢀⠀⣼⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠈⠻⣌⢢⢸⣷⣸⡈⠳⠦⠤⠞⠁⣷⣼⡏⣰⢃⡾⠋⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⡇⢻⡶⣦⣤⡴⡾⢸⣿⣿⣷⠏⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢿⡟⡿⡄⣳⣤⣤⣴⢁⣾⠏⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⠘⠒⠚⠉⠉⠑⠒⠊⣸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀     ⠈⠳⠶⠔⠒⠒⠲⠴⠞⠋⠀⠀⠀⠀
                            </pre>
                    <p>Type "-i" or "--info" for more info:</p>
                `;
                infoDisplayed = false; // Reset infoDisplayed flag
                break;
                case '-i':
                case '--info':
                    // Display table and prompt for next command
                    outputDiv.innerHTML =`
                    <pre>
    --------------------------------------------
    |       Command      |      Description     |
    --------------------------------------------
    | -s or  -summary   | For a summary        |
    --------------------------------------------
    | -e  / -education  | For the education    |
    |                   |  info                |
    --------------------------------------------
    | -x / -experience  | For the experiences  |
    --------------------------------------------
    | -a / -achievement | For the Achievements |
    --------------------------------------------
    | -c / -certificates| For the certificates |
    --------------------------------------------
    | -k / -skills      | For the skills       |
    --------------------------------------------
    | -n / -network     | For contacts         |
    --------------------------------------------
                            </pre>
                        <p>Enter a command to get the description:</p>
                    `;
                    infoDisplayed = true; // Set flag to true
                    break;

            default:
                response = `Command '${command}' not found.`;
                break;
        }
    } else {
        // Handle commands before the info table is displayed
        switch (command) {
            case '-i':
            case '--info':
                // Display table and prompt for next command
                outputDiv.innerHTML =`
                <pre>
--------------------------------------------
|       Command      |      Description     |
--------------------------------------------
| -s or  -summary   | For a summary        |
--------------------------------------------
| -e  / -education  | For the education    |
|                   |  info                |
--------------------------------------------
| -x / -experience  | For the experiences  |
--------------------------------------------
| -a / -achievement | For the Achievements |
--------------------------------------------
| -c / -certificates| For the certificates |
--------------------------------------------
| -k / -skills      | For the skills       |
--------------------------------------------
| -n / -network     | For contacts         |
--------------------------------------------
                        </pre>
                    <p>Enter a command to get the description:</p>
                `;
                infoDisplayed = true; // Set flag to true
                break;
            case 'clear':
                // Clear user-entered commands but keep the initial ASCII art and info prompt
                outputDiv.innerHTML = `
                <pre class="ascii-art"> 
    ⠀⣰⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣆⠀⠀
    ⣴⠁⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠃⢣⠀
    ⢻⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⢸⠇
    ⠘⡄⢆⠑⡄⠀⠀⠀⠀⠀⢀⣀⣀⣠⣄⣀⣀⡀⠀⠀⠀⠀⠀⢀⠜⢠⢀⡆⠀
    ⠀⠘⣜⣦⠈⢢⡀⣀⣴⣾⣿⡛⠛⠛⠛⠛⠛⡿⣿⣦⣄⠀⡠⠋⣰⢧⠎⠀⠀
    ⠀⠀⠘⣿⣧⢀⠉⢻⡟⠁⠙⠃⠀⠀⠀⠀⠈⠋⠀⠹⡟⠉⢠⢰⣿⠏⠀⠀⠀
    ⠀⠀⠀⠘⣿⡎⢆⣸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣿⣠⢣⣿⠏⠀⠀⠀⠀
    ⠀⠀⠀⡖⠻⣿⠼⢽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠹⣾⠟⢳⡄⠀⠀⠀
    ⠀⠀⠀⡟⡇⢨⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⣇⢠⢿⠇⠀⠀⠀
    ⠀⠀⠀⢹⠃⢻⡤⠚⠀⠀⠀⠀⣀⠀⠀⢀⠀⠀⠀⠀⠙⠢⡼⠀⢻⠀⠀⠀⠀
    ⠀⠀⠀⠸⡓⡄⢹⠦⠤⠤⠤⢾⣇⠀⠀⢠⡷⠦⠤⠤⠴⢺⢁⠔⡟⠀⠀⠀⠀
    ⠀⠀⠀⢠⠁⣷⠈⠓⠤⠤⠤⣞⡻⠀⠀⢸⣱⣤⠤⠤⠔⠁⣸⡆⣇⠀⠀⠀⠀
    ⠀⠀⠀⠘⢲⠋⢦⣀⣠⢴⠶⠀⠁⠀⠀⠈⠁⠴⣶⣄⣀⡴⠋⣷⠋⠀⠀⠀⠀
    ⠀⠀⠀⠀⣿⡀⠀⠀⢀⡘⠶⣄⡀⠀⠀⠀⣠⡴⠞⣶⠀⢀⠀⣼⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠈⠻⣌⢢⢸⣷⣸⡈⠳⠦⠤⠞⠁⣷⣼⡏⣰⢃⡾⠋⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⡇⢻⡶⣦⣤⡴⡾⢸⣿⣿⣷⠏⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢿⡟⡿⡄⣳⣤⣤⣴⢁⣾⠏⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⠘⠒⠚⠉⠉⠑⠒⠊⣸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀         ⠈⠳⠶⠔⠒⠒⠲⠴⠞⠋⠀⠀⠀⠀
                            </pre>
                    <p>Type "-i" or "--info" for more info:</p>
                `;
                infoDisplayed = false; // Reset infoDisplayed flag
                break;
            default:
                response = `Command '${command}' not found.`;
                break;
        }
    }

    if (command !== 'clear') {
        const responseOutput = document.createElement('p');
        responseOutput.textContent = response;

        outputDiv.appendChild(responseOutput);
    }

    // Scroll to the bottom
    document.querySelector('.terminal-body').scrollTop = document.querySelector('.terminal-body').scrollHeight;

    // Clear the input field
    this.value = '';
}
});