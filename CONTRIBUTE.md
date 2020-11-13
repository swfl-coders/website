# Contributing Guidelines 👩🏻‍💻👨🏻‍💻

Thank you visiting and for your interest in collaborating to this project.

Please visit our [issues page](https://github.com/swfl-coders/website/issues) for tasks we currently need help with. If you find an **issue** you would like to contribute, please comment on it, so others can see someone is already working on this. Please remember to make a reference to your **issue number** when you open your pull request.

If none of the issues you see is something you want to help, don't worry, you can still contribute. Just open a pull request and use the **enhancement** label.

## GIT & GitHub

### Rules

- Don't `push` to master only `pull` from git
- Branch names: lower-case with underscores separating words name it as close and brief to the feature you're creating like `script_folder` or simply `readme`
- Commit messages: a sentence in present-tense with punctuation that gives a decent description of what was done. For example, something as simple as "Adds readme file"

**IMPORTANT:** Please don't commit `package-lock.json` unless you added any packages to the project

### Workflow

🚀*Remember, it's just a web page, we can fix anything. Go crazy and ship code!*

1. You will need to 'Fork' this repository to your account
2. Next you will need to 'Clone' your fork to your computer
2. PULL to make sure you have the most fresh copy. Use `git pull`
3. Create a new branch `git checkout -b name_of_feature_branch`
4. Code stuff 🙃
5. `git add .`
6. `git commit -m "Adds cool feature and closes #2"` (assuming you are working on `issue #2`)
7. `git push origin name_of_feature_branch`
8. Create a PR (pull request) in GitHub and tag an organizer for code review
9. Teammate/organizer leaves comments and/or merges your code
10. Feature branch deleted once successfully merged into GitHub master

### Helpful Git Commands

#### Non-changing

- `git status`
- `git log`
- `git branch`
- `git branch -a`
- `git checkout -b branch_name`
- `git checkout branch_name`

#### Changing

- `git add .`
- `git commit -m "Cool message in present tense"`

#### Move Code Around

- `git pull`
- `git push origin branch_name`
