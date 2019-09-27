# Jenkins


## docker jenkins

```
docker pull akhilrajmailbox/jenkins:latest
```


## Serve html reports

[link 1](https://stackoverflow.com/questions/33821217/html-in-jenkins-job-descriptions)

[link 2](https://stackoverflow.com/questions/35783964/jenkins-html-publisher-plugin-no-css-is-displayed-when-report-is-viewed-in-j)


[error message](https://issues.jenkins-ci.org/browse/JENKINS-12875)

[ci-cd jenkins with gitLab](https://docs.bitnami.com/bch/how-to/create-ci-pipeline/)

[gradle plugin for jenkins](https://wiki.jenkins-ci.org/display/JENKINS/Gradle+Plugin)


## multi-user-cred >> (role based strategy)

[link 1](https://stackoverflow.com/questions/8323129/jenkins-restrict-view-of-jobs-per-user)

[link 2](http://www.kblearningacademy.com/configure-role-strategy-plugin-in-jenkins/)


## Jenkins cloned repo branches in workspace
[Jenkins branch finding from console](https://stackoverflow.com/questions/14985563/how-to-retrieve-the-git-branch-name-that-was-built-by-jenkins-when-using-inverse)

```
git show-ref | grep $(git rev-parse HEAD) | grep remotes | grep -v HEAD | sed -e 's/.*remotes.origin.//'
```


[pdf-files](https://github.com/akhilrajmailbox/Jenkins/tree/master/pdf-files)

## Web pages for reference

You can clone this repo and open the html files in side [Web-Files](https://github.com/akhilrajmailbox/Jenkins/tree/master/Web-Files) for some configuration reference.




## accessing-and-dumping-jenkins-credentials

[accessing-and-dumping-jenkins-credentials](https://codurance.com/2019/05/30/accessing-and-dumping-jenkins-credentials/)


