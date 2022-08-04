const html = (data) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Page Title</title>
    <style>
    .team-container {
        margin: 3em auto;
    }
    .employee {
        width: 18rem;
    }
    </style>
    </head>
    <body>
    
        <h1 class="p-3 mb-2 bg-danger text-white text-center">My Team</h1>
       <div class="container">
       <div class="row">
       <div class="team-container col-sm-12 d-flex flex-wrap">
       ${ data.map((employee) => {
        
       
        return`
        <div class="employee card d-flex justify-content-between">
            <div class="card header p-3 mb-2 bg-primary text-white justify-content-center">
                <h2>
                ${employee.getName()}
                </h2>
                <div>
                ${employee.getRole() === "Manager"? `<i class="fa-solid fa-mug-hot"></i>`: ''}
                ${employee.getRole() === "Intern"? `<i class="fa-solid fa-user-graduate"></i>`: ''}
                ${employee.getRole() === "Engineer"? `<i class="fa-solid fa-glasses"></i>`: ''}
                    ${employee.getRole()}
                </div>
            </div>
            <div class="card-body ">
                <div class="card-content">
                    <strong>
                        ID: 
                    </strong>
                    ${employee.getId()}
                </div>
                <div class="card-content">
                    <strong>
                        Email: 
                    </strong>
                    ${employee.getEmail()}
                </div>
                <div class="card-content">
                    <strong>
                        ${employee.getRole() === "Manager"? "Office Number:": ''} 
                        ${employee.getRole() === "Intern"? "School:": ''}
                        ${employee.getRole() === "Engineer"? "Github:": ''}
                    </strong>
                    ${employee.getRole() === "Manager"? employee.officeNumber: ''}
                    ${employee.getRole() === "Intern"? employee.getSchool(): ''}
                    ${employee.getRole() === "Engineer"? `<a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`: ''}
                </div>
            </div>
        </div>`}).join('')}
       </div>
       </div>
       </div>
    
    </body>
    </html> 
    `

}

module.exports = html;

