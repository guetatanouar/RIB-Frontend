pipeline {
    agent any
    triggers {
        cron('*/10 * * * *')
    }
      stages {
        stage('Install YARN') { 
            steps {
                    bat 'npm install -g yarn' 
            }
        }
       stage('Install') { 
            steps {
                     nodejs('Node-10.17'){
                    bat 'yarn install' 
                }
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
