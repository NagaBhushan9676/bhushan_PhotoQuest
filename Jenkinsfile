pipeline{
    agent any
    // patameters {
    //     string{ name: 'FRONTEND_REPO', defaultValue: 'main', description: 'Git branch for the Frontend', trim:true}
    //     string{ name: 'BACKEND_REPO', defaultValue: 'main', description: 'Git branch for the Backend', trim:true}
    //     choice{ name: 'TARGET_ENV', choices['dev', 'stage', 'prod'], description: 'Deployment Environment'}
    // }
    stages{
        stage('Build'){
            steps{
                script{
                    echo'Building .... from github'

                }
            }
        }
        stage('Test'){
            steps{
                script{
                    echo'Testing .... from github'
                }
            }
        }
    }
}