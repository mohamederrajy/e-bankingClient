pipeline {
    agent { label 'prod' }

 stages {
        stage('Build') {
            steps {
                sh 'pwd'
                sh 'npm install'
                sh 'npm run build --if-present'
            }
        }
        stage('Deploy') {
            steps {
                 script {
                    try {
                        sh 'docker volume inspect vol_client'
                        sh 'rm -rf /var/lib/docker/volumes/vol_client/_data/**'
                        sh 'cp -rf $(pwd)/dist/* /var/lib/docker/volumes/vol_client/_data/'
                    }
                    catch (Exception e) {
                        sh 'echo "+ creating volum becaus it doesn exist"'
                        sh 'docker volume create vol_client'
                        sh 'docker build -t front-client .'
                        sh 'docker run -v vol_client:/usr/share/nginx/html --name front-client --restart always -d -p 3002:80 front-client'
                    }
                }
            }
        }
    }
}
