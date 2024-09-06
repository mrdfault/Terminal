// Initialize a flag to keep track of whether the info table has been displayed
let infoDisplayed = false;
function copyText() {
    // Create a temporary text area element
    const tempInput = document.createElement("textarea");
    tempInput.value = "Ay.elbaraka@aui.ma";
    document.body.appendChild(tempInput);
    // Select and copy the text
    tempInput.select();
    document.execCommand("copy");
    // Remove the temporary element
    document.body.removeChild(tempInput);

    const messageDiv = document.querySelector('.copied-message');
    messageDiv.style.display = "block";
    messageDiv.textContent = "Text copied: ay.elbaraka@aui.a";

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}


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
                    response = ``;                    
                    outputDiv.innerHTML = `
                <pre > 
⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀    Recent Computer Science graduate with a minor in Communication Studies, 
    seeking a role to apply and further develop my technical and interpersonal skills.
    Proficient in problem-solving, software design, and coding, with hands-on experience
    in Bash Scripting, C, C++, Python (Pandas, NumPy), Java, HTML, CSS, JavaScript, 
    and SQL. Possess strong communication abilities, honed through academic coursework 
    and extracurricular involvement.
⠀⠀⠀⠀
                            </pre>
                 
                `;
                    break;
                case '-e':
                case '-education':
                    response = ``;
                    outputDiv.innerHTML = `
                <pre > 
⠀⠀⠀⠀⠀⠀⠀⠀⠀
<strong class="ttl"> Bachelor of Computer Science – Minor in Communication Studies. </strong>
    Al Akhawayn University, Ifrane Morocco	2019 – 2024	

<strong class="sbt">Relevant Coursework:</strong>Data Structures, Analysis of Algorithms, 
Computer Organization and Architect, Agile Software Engineering, Machine Learning and Data Mining
⠀⠀⠀⠀
                            </pre>
                 
                `;
                         
                    break;
                case '-x':
                case '-experience':
                    response = ``;                    
                    outputDiv.innerHTML = `
                <pre > 
⠀⠀⠀⠀⠀⠀⠀⠀⠀
<strong class = "ttl">Admission & Outreach Department </strong>(Al Akhawayn University, Ifrane, Morocco)
    <strong class = "sbt">Internship</strong> | <strong class = "dt">June 2023 – September 2023</strong>
    •	Developed a Chatbot for AUI. The chatbot was built using Langchain and Next.js, 
<strong class = "ttl">Student Government Association</strong> (Al Akhawayn University, Ifrane, Morocco)
    <strong class = "sbt">Treasurer</strong> | <strong class = "dt">December 2021 – December 2022</strong>
    •	Managed accounts and supervised all financial matters, including financial audits.
    •	Preserved and maintained records for all local fund accounts.
    <strong class = "sbt">Public Relations Officer</strong> | February 2022 – December 2022</strong>
    •	Responsible for communicating actions and updates for the student body.
<strong class = "ttl">Student Leadership Council</strong> (Al Akhawayn University, Ifrane, Morocco)
    <strong class = "sbt">President</strong> | <strong class = "dt">December 2022 – September 2023</strong>
    •	Led the student organization’s vision and set general orientations for the mandate.
    •	Coordinated workshops and training programs.
    <strong class = "sbt">General Secretary</strong> | March 2022 – December 2022
    •	Maintaining effective records.
    •	Communication and correspondence.
<strong class = "ttl">Lions Club Ifrane Al Akhawayn</strong> (Al Akhawayn University, Ifrane, Morocco)
    <strong class = "sbt">President</strong> | <strong class = "dt">March 2023 – May 2024</strong>
    •	Serve as chief executive officer for this club.
    •	Encourage diplomacy and solve disputes in a fair and transparent fashion utilizing 
        the Dispute Resolution Procedure if needed.
    •	Ensure regular meetings to discuss and advance initiatives established by the Global Action Team.
    <strong class = "sbt">Vice President</strong> | <strong class = "dt">June 2022 – March 2023</strong>
    •	develop a plan for membership growth, community engagement, and the fulfillment 
        of humanitarian services.
    •	Identify potential leaders and encourage their development as future leaders.
    <strong class = "sbt">Service Chairperson</strong> | <strong class = "dt">March 2021 – June 2022</strong>
    •	Incorporate opportunities for local youth and Leos to engage in all aspects 
        of service activities, including goal setting, implementation, project evaluation and reporting.
⠀⠀⠀⠀
                            </pre>
                 
                `;
                    break;
                case '-a':
                case '-achievement':
                    response = ``;                    
                    outputDiv.innerHTML = `
                <pre > 
•   Won the Best Club Awards for the most impactful club within Al Akhawayn University.
•   Participating twice in Moroccan Collegiate Programming Contest Competition (MCPC) 
    As an AUI official team.
•   Won the Explorer Startup Program by UM6P
•   Awarded with Al Ghurair STEM Scholarship
⠀⠀⠀⠀
                            </pre>
                 
                `;
                    break;
                case '-c':
                case '-certificates':
                    response = ``;                    
                    outputDiv.innerHTML = `
                <pre > 
<a class="cert" href="https://www.coursera.org/account/accomplishments/verify/WLDLJ2A3YV38" target="_blank" >
Data Visualization and Dashboards with Excel and Cognos</a>
<a class="cert" href="https://www.coursera.org/account/accomplishments/verify/L5XAQO5M8E5W" target="_blank" >
Excel Basics for Data Analysis</a>	
<a class="cert" href="https://www.coursera.org/account/accomplishments/verify/SS6SG3WPUZAC" target="_blank" >
Introduction to Data Analysis Using Excel</a>
<a class="cert" href="https://www.coursera.org/account/accomplishments/verify/FL76NCT3QEEJ" target="_blank" >
Python Project for Data Science</a>
<a class="cert" href="https://www.coursera.org/account/accomplishments/verify/BYZIG4W3ABYC" target="_blank" >
Python for Data Science, AI & Development</a>
<a class="cert" href="https://www.coursera.org/account/accomplishments/verify/M9ES8FVHQL5K" target="_blank" >
Azure: Create a Virtual Machine and Deploy a Web Server</a>
<a class="cert" href="https://www.coursera.org/account/accomplishments/verify/6PBBGW42952S" target="_blank" >
Software Processes and Agile Practices</a>

                            </pre>
                 
                `;
                    break;
                case '-k':
                case '-skills':
                    response = ``;                    
                    outputDiv.innerHTML = `
                <pre > 
⠀⠀⠀⠀⠀⠀⠀⠀⠀

<strong class="cert">Languages</strong>
    •	Arabic – Native speaker, English – Fluent, French – Fluent.
<strong class="cert">Soft Skills</strong>
    •	Communication, Leadership, Team Collaboration, Problem-Solving, Time Management,
        Adaptability, Critical Thinking, Work Ethic.
<strong class="cert">Programing Languages</strong>
    •	Bash/Shell Scripting, C, C++, Python, Java, HTML, CSS, JavaScript, SQL.
<strong class="cert">Software</strong>
    •	MS Office (Word, Excel, PowerPoint, Outlook, Forms, Planner)
    •	Adobe (Photoshop, Adobe illustrator, Adobe Premiere Pro, Lightroom, InDesign)
    •	IBM Cognos 
<strong class="cert">Technologies.</strong>
    •	MySQL, PostgreSQL
    •	AWS (Amazon Web Services), Google Cloud Platform (GCP)
    •	Linux/Unix
                            </pre>
                 
                `;
                    break;
                case '-n':
                case '-network':
                    response = ``;                    
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
                    <h1> Ayoub El Baraka  </h1>                

                <a href="https://www.linkedin.com/in/ayoub-el-baraka-10b429227/" target="_blank" ><button class="button-ins" role="button">LinkedIn</button></a>
                <a href="https://www.instagram.com/ayoub_o_0/" target="_blank" ><button class="button-ins" role="button">Instagram</button></a>
                <a href="https://www.instagram.com/ayoub_o_0/" target="_blank" ><button class="button-ins" role="button">Instagram</button></a>
                <button class="button-ins" onclick="copyText()">Copy Email</button>
                <div class="copied-message"></div>

                `;
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
    |       <span class="ttl" >Command</span>    |      <span class="ttl" >Description</span>     |
    --------------------------------------------
    | <span class="sbt">-s or  -summary</span>   | For a summary        |
    --------------------------------------------
    | <span class="sbt">-e  / -education</span>  | For the education    |
    |                   |  info                |
    --------------------------------------------
    | <span class="sbt">-x / -experience</span>  | For the experiences  |
    --------------------------------------------
    | <span class="sbt">-a / -achievement</span> | For the Achievements |
    --------------------------------------------
    | <span class="sbt">-c / -certificates</span>| For the certificates |
    --------------------------------------------
    | <span class="sbt">-k / -skills</span>      | For the skills       |
    --------------------------------------------
    | <span class="sbt">-n / -network</span>     | For contacts         |
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
|       <span class="ttl" >Command</span>    |      <span class="ttl" >Description</span>     |
--------------------------------------------
| <span class="sbt">-s or  -summary</span>   | For a summary        |
--------------------------------------------
| <span class="sbt">-e  / -education</span>  | For the education    |
|                   |  info                |
--------------------------------------------
| <span class="sbt">-x / -experience</span>  | For the experiences  |
--------------------------------------------
| <span class="sbt">-a / -achievement</span> | For the Achievements |
--------------------------------------------
| <span class="sbt">-c / -certificates</span>| For the certificates |
--------------------------------------------
| <span class="sbt">-k / -skills</span>      | For the skills       |
--------------------------------------------
| <span class="sbt">-n / -network</span>     | For contacts         |
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