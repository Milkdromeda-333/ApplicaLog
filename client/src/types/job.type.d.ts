type ApplicationStatuses = "Applied" | "Bookmarked" | "Interviewing" | "Accepted" | "Declined" | "Negotiating" | "Rejected" | "Archived";


type JobType = {
    position: string,
    applicationStatus: "Applied" | "Bookmarked" | "Interviewing" | "Accepted" | "Declined" | "Negotiating" | "Rejected" | "Archived",
    company: string,
    max_salary: string,
    location: string,
    date_saved: string,
    date_applied: string,
    excitement: 0 | 1 | 2 | 3 | 4 | 5,
    notes: string,
    url: string,
    id: number
}

export {
    ApplicationStatuses,
    JobType
};