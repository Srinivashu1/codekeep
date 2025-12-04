const records = [
    {
        id: 1,
        code: "Add Github",
        description: `Initialize and push to GitHub`,
        command: `
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin git@github.com:username/repository.git
        git push -u origin main`,
        category: "Git"
    },
    {
        id: 2,
        code: "Update Github",
        description: `Commit and push changes`,
        command: `
        git add .
        git commit -m "Update: Your commit message here"
        git push`,
        category: "Git"
    },
    {
        id: 3,
        code: "Create React App",
        description: `
        Create a new React application`,
        command: `
        npx create-react-app my-app
        cd my-app
        npm start`,
        category: "React"
    },
    {
        id: 4,
        code: "Install Dependencies",
        description: 
        `Install project dependencies`,
        command: `
        npm install
        # or with yarn
        yarn install`,
        category: "Node.js"
    }
];

