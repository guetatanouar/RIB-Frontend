pipeline {
    agent any
    triggers {
        cron('* * * * *')
    }
      stages {
        stage('Build') { 
            steps {
                bat 'npm install' 
            }
        }
    }
}
