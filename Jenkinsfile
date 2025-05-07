pipeline{
    agent any
    // patameters {
    //     string{ name: 'FRONTEND_REPO', defaultValue: 'main', description: 'Git branch for the Frontend', trim:true}
    //     string{ name: 'BACKEND_REPO', defaultValue: 'main', description: 'Git branch for the Backend', trim:true}
    //     choice{ name: 'TARGET_ENV', choices['dev', 'stage', 'prod'], description: 'Deployment Environment'}
    // }
    stages{
        stage('Build On PR Merge'){

            when{
                allOf {
                    branch 'main'
                    expression { 
                        def msg = sh(script: 'git log -1 --pretty=%B', returnStdout: true).trim()
                        return msg.contains('Merge pull request')
                    }
                }
            }
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