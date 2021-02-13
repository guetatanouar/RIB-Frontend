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
    }
      stages {
        stage('Build') {
            steps {
                bat 'yarn run build'
            }
        }
    }
      stages {
        stage('Build') {
            steps {
                bat 'yarn run eject'
            }
        }
    }
      stages {
        stage('Build') {
            steps {
                bat 'yarn run eject'
            }
        }
    }
      stages {
        stage('Build') {
            steps {
                bat 'yarn start'
            }
        }
    }

}
