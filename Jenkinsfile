pipeline {
    agent any
    triggers {
        cron('*/10 * * * *')
    }
      stages {
        stage('Install') { 
            steps {
                bat 'yarn' 
            }
        }
    
      
        stage('Build') {
            steps {
                bat 'yarn run build'
            }
        }
    
        stage('Eject') {
            steps {
                bat 'yarn run eject'
            }
        }
    
    
    
       stage('Start') {
            steps {
                bat 'yarn start'
            }
        }
    }

}
