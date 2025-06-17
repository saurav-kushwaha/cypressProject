describe("read and write files in cypress", () =>{
    it('create text file',()=>{
        cy.writeFile('firstFile.txt', 'This is my first file created by cypress');
        cy.writeFile('firstFile.txt', ' This is my second line in the file', {flag: 'a+'});
    })
    it('create second text file next line',()=>{
        cy.writeFile('secondFile.txt', 'This is my first file created by cypress\n');
        cy.writeFile('secondFile.txt', 'This is my second line in the file', {flag: 'a+'});
    })
    // creating json file
    it('create json  file ',()=>{
        cy.writeFile('test1.json', {name:'saurav', education:'BCA',emailId:'abcd12@gmail.com'});
       
    })

    // creating json file by providing path
    it('create json file with path',()=>{
        cy.writeFile('cypress/fixtures/test2.json', {name:'saurav',emailId:'xyanbsb123@gmail.com',password:'ajdh1223'})
    })

    it('read file txt',()=>{
        cy.readFile('firstFile.txt').then((data)=>{
            cy.log('Data from first file:', data);
            expect(data).to.include('This is my first file created by cypress');
            expect(data).to.include('This is my second line in the file');
        })
    })

    it('read file json',()=>{
        cy.readFile('test1.json').then((data)=>{
            for(const key in data){
                cy.log(key + ' : ' + data[key]);
            }
           // cy.log('Data from json file:', data.name);
            expect(data).to.have.property('name', 'saurav');
            expect(data).to.have.property('education', 'BCA');
            expect(data).to.have.property('emailId','abcd12@gmail.com');
        })
    })

    it('read file json with path',()=>{
        cy.readFile('cypress/fixtures/test2.json').then((data)=>{
            for(const key in data){
                cy.log(key + ' : ' + data[key]);
            }

            
        })
    })

    it('Assertion validation for file',()=>{
        cy.readFile('cypress/fixtures/test2.json').should('exist');
        cy.readFile('firstFile.txt').should('exist').and('contain', 'This is my first file created by cypress')
    })

});