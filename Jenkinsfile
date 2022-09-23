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
                        // WRITE YOUR STEPS HERE
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "Nodetwo"
                    }
                    steps {
                        // WRITE YOUR STEPS HERE
                    }
                }
            }
        }
    }
}