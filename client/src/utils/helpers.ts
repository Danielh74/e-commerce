export function isWithinLast30Days(dateString: string) {
    const givenDate = new Date(dateString);
    const today = new Date();

    // Calculate 30 days ago from today
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    // Check if givenDate is between thirtyDaysAgo and today
    return givenDate >= thirtyDaysAgo && givenDate <= today;
}