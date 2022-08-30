pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "Nodeone"
                    }
                    steps {
                        git url: 'https://github.com/SACHINHJIBHAKATE/cypressframework.git'
                        bat 'npm install'
                        bat 'npm run test_CucumberBDD_Featurefile_record_parallel'
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "Nodetwo"
                    }
                    steps {
                        git url: 'https://github.com/SACHINHJIBHAKATE/cypressframework.git'
                        bat 'npm install'
                        bat 'npm run test_CucumberBDD_Featurefile_record_parallel'
                    }
                }
            }
        }
    }
}