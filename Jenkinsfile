pipeline{
    agent any
    parameters {
        string{ name: 'FRONTEND_REPO', defaultValue: 'main', description: 'Git branch for the Frontend', trim:true}
        string{ name: 'BACKEND_REPO', defaultValue: 'main', description: 'Git branch for the Backend', trim:true}
        choice{ name: 'TARGET_ENV', choices['dev', 'stage', 'prod'], description: 'Deployment Environment'}
    }

    environment {
        DOCKER_HUB_USER = 'nagabhushan9676'
        FRONTEND_REPO = "${DOCKER_HUB_USER}/b-photoquest-front"
        BACKEND_REPO = "${DOCKER_HUB_USER}/b-photoquest"
       
    }
    stages{
        
        
        stage('Build on PR merge'){
            when{
                allOf{
                    branch 'main'
                    expression{ 
                        def msg = sh(script: 'git log -1 --pretty=%B', returnStdout: true).trim()
                        return msg.contains('Merge pull request')
                     }
                }
            }
        }stage('Code Checkout'){
            steps{
                script{
                    dir('frontend'){
                        git branch: '${params.FRONTEND_REPO}', url: 'https://github.com/NagaBhushan9676/bhushan_PhotoQuest/searchI'
                    }
                    dir('backend'){
                        git branch: '${params.BACKEND_REPO}', url: 'https://github.com/NagaBhushan9676/bhushan_PhotoQuest/backend'
                    }
                }
            }
        }
        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                }
            }
        }
        
        stage('Deploy with Ansible') {
            steps {
                script {
                    dir('ansible') {
                        sh 'ansible-playbook deploy.yml -e "frontend_branch=${params.FRONTEND_REPO} backend_branch=${params.BACKEND_REPO} target_env=${params.TARGET_ENV} build_number=${env.BUILD_NUMBER}"'
                    }
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