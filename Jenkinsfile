pipeline {
    agent any
    triggers {
        cron('*/10 * * * *')
    }
      stages {
        stage('Build') { 
            steps {
                bat 'yarn' 
            }
        }
    
      
        stage('Build') {
            steps {
                bat 'yarn run build'
            }
        }
    
        stage('Build') {
            steps {
                bat 'yarn run eject'
            }
        }
    
        stage('Build') {
            steps {
                bat 'yarn run eject'
            }
        }
    
       stage('Build') {
            steps {
                bat 'yarn start'
            }
        }
    }

}
