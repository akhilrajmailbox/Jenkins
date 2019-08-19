FROM akhilrajmailbox/ubuntu:16.04
MAINTAINER Akhil Raj <akhilrajmailbox@gmail.com>

RUN apt-get update && apt-get upgrade -y \
        && apt-get install -y nano apt-utils net-tools dnsutils curl wget zip unzip openssh-server openssh-client git sudo \
        software-properties-common \
        --no-install-recommends \
        && add-apt-repository ppa:webupd8team/java -y \
        && apt-get update -y \
        && echo debconf shared/accepted-oracle-license-v1-1 select true | \
        debconf-set-selections \
        && echo debconf shared/accepted-oracle-license-v1-1 seen true | \
        debconf-set-selections \
        && apt-get install oracle-java8-installer -y \
        --no-install-recommends \
        && apt install oracle-java8-set-default

RUN sh -c "curl -sL https://deb.nodesource.com/setup_6.x | sudo bash -"
RUN apt-get install nodejs -y

RUN wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | apt-key add - \
        && sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'

RUN apt-get update && apt-get install jenkins sudo -y
RUN usermod -aG sudo jenkins
RUN sh -c 'echo "jenkins ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers'

EXPOSE 8080
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
ENV JAVA_OPTS "-Xmx4096m"
ENV PATH $PATH:$JAVA_HOME/bin

ENTRYPOINT chown -R  jenkins:jenkins /var/lib/jenkins && /etc/init.d/jenkins start && tailf /var/log/jenkins/jenkins.log
