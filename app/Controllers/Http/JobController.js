'use strict'

const Job = use('App/Models/Job')
class JobController {
    async home({view}){
        // const job = new Job
        // job.title = 'software'
        // job.link = 'google.com'
        // job.description = 'I want a job dude'

        // await job.save()

        const jobs = await Job.all()
        return view.render('index', {jobs : jobs.toJSON()})
    }
}

module.exports = JobController
