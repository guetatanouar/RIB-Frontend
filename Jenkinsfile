pipeline {
    agent any
    triggers {
        cron('*/10 * * * *')
    }
      stages {
        stage('install') { 
            steps {
                bat 'yarn' 
            }
        }
    
      
        stage('Build') {
            steps {
                bat 'yarn run build'
            }
        }
    
        stage('eject') {
            steps {
                bat 'yarn run eject'
            }
        }
    
    
    
       stage('start') {
            steps {
                bat 'yarn start'
            }
        }
    }

}
