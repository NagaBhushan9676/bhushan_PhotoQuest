pipeline {
    agent {
    docker {
        image 'willhallonline/ansible:latest'
        args "-v /mnt/d/Task/Angular@1:/workspace -w /workspace"
    }
}

    parameters {
        string(name: 'FRONTEND_REPO', defaultValue: 'https://github.com/NagaBhushan9676/bhushan_PhotoQuest.git', description: 'Git repository for the Frontend', trim: true)
        string(name: 'BACKEND_REPO', defaultValue: 'https://github.com/NagaBhushan9676/bhushan_PhotoQuest.git', description: 'Git repository for the Backend', trim: true)
        choice(name: 'TARGET_ENV', choices: ['dev', 'stage', 'prod'], description: 'Deployment Environment')
    }

    stages {
        stage('Build on PR merge') {
            when {
                allOf {
                    branch 'main'
                    expression {
                        def msg = sh(script: 'git log -1 --pretty=%B', returnStdout: true).trim()
                        return msg.contains('Merge pull request')
                    }
                }
            }
            steps {
                echo 'Build triggered by PR merge to main'
            }
        }

        stage('Code Checkout') {
            steps {
                script {
                    git branch: 'main', url: params.FRONTEND_REPO
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
                    sh '''
                        cd /workspace/ansible
                        ansible-playbook deploy.yml \
                        -e "frontend_branch=${params.FRONTEND_REPO} backend_branch=${params.BACKEND_REPO} target_env=${params.TARGET_ENV} build_number=${env.BUILD_NUMBER}"
                    '''
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Testing .... from github'
                }
            }
        }
    }
}