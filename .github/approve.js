module.exports = ({github, context}) => {
  const reviewers = github.rest.pulls.listRequestedReviewers({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.issue.number
  });
  console.log(reviewers);
}