pipeline {
    agent any
    triggers {
        cron('*/10 * * * *')
    }
      stages {
        stage('install') { 
            steps {
                bat 'npm' 
            }
        }
    
      
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    
        stage('eject') {
            steps {
                bat 'npm run eject'
            }
        }
    
    
    
       stage('start') {
            steps {
                bat 'npm start'
            }
        }
    }

}
