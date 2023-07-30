import { testData } from './test-data';

import { db } from './db';

export const seedDb = () => {
  const userCount = db.user.count();
  console.log('seedDb userCount', userCount)
  if (userCount > 0) return;
  console.log('seedDb userCount > 0', userCount)
  testData.users.forEach((user) => db.user.create(user));

  testData.organizations.forEach((organization: any) =>
    db.organization.create(organization)
  );

  testData.jobs.forEach((job: any) => db.job.create(job));
  console.log('seedDb', db)
};
