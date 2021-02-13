pipeline {
    agent any
    triggers {
        cron('*/10 * * * *')
    }
      stages {
        stage('Build') { 
            steps {
                bat 'npm install' 
            }
        }
    }
}
