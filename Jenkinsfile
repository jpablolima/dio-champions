pipeline {
    agent {
        label "dio-champions"
    }
    environment {
        KUBECONFIG = "/home/pablo/.kube/config"
        IMAGE_NAME = "champions"
        IMAGE_TAG  = "champions:latest"
    }

    stages {
        stage("build") {
            steps {
                echo "building the application..."
                sh "/home/pablo/.nvm/versions/node/v20.17.0/bin/node -v"
                sh "ls -la"
            }
        }
        stage("Build image") {
            steps {
                echo "Creatingg image to project..."
                sh "docker build -t ${IMAGE_TAG} ."
                sh "docker images | grep ${IMAGE_NAME}"
            }
        }
        stage("Deployment") {
            steps {
                echo "Deployment to project..."
                sh "kind load docker-image ${IMAGE_TAG} --name devops"
                sh "kubectl delete pod dio-champions.yaml -n dio --ignore-not-found=true"
                sh "kubectl apply -f dio-champions.yaml -n dio"
                sh "kubectl wait --for=condition=Ready pod/formula-one -n dio --timeout=30s"
            }
        }
    }
}
