pipeline {
    agent any
    triggers {
        cron('*/10 * * * *')
    }
      stages {
        stage('Install') { 
            steps {
                bat 'npm install' 
            }
        }
    
      
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    
        stage('Eject') {
            steps {
                bat 'npm run eject'
            }
        }
    
    
    
       stage('Start') {
            steps {
                bat 'npm start'
            }
        }
    }

}
