pipeline {
    agent any
    triggers {
        cron('0 * * * *')
    }
      stages {
        stage('Install YARN') { 
            steps {
                    bat 'npm install -g yarn' 
            }
        }
       stage('Install') { 
            steps {
                     nodejs('Node-15.8'){
                    bat 'yarn install' 
                }
            }
        }
    
      
        stage('Build') {
            steps {
                     nodejs('Node-15.8'){
                bat 'yarn run build'
                }
            }
        }
    
      
    
       stage('Start') {
            steps {
                      nodejs('Node-15.8'){
                bat 'yarn start'
                }
            }
        }
    }

}
