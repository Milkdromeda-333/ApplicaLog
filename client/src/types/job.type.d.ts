enum ApplicationStatuses{
    BOOKMARKED   = 'Bookmarked',
    APPLYING     = 'Applying',
    APPLIED      = 'Applied',
    INTERVIEWING = 'Interviewing',
    ACCEPTED     = 'Accepted',
    DECLINED     = 'Declined',
    REJECTED     = 'Rejected',
    ARCHIVED     = 'Archived'
}

type Job = {
    position: string,
    applicationStatus: ApplicationStatuses,
    company: string,
    max_salary: number,
    location: string,
    date_saved: Date,
    date_applied: Date,
    excitement: 0 | 1 | 2 | 3 | 4 | 5,
    notes: string,
    url: string
}

export {
    ApplicationStatuses,
    Job
};