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

After pulling down this repository you will land on the `master` branch

1. PULL to make sure you have the most fresh copy. Use `git pull`
2. Create a new branch `git checkout -b name_of_feature_branch`
3. Code stuff 🙃
4. `git add .`
5. `git commit -m "Adds cool feature and closes #2"` (assuming you are working on `issue #2`)
6. `git push origin name_of_feature_branch`
7. Create a PR (pull request) in GitHub and tag an organizer for code review
8. Teammate/organizer leaves comments and/or merges your code
9. Feature branch deleted once successfully merged into GitHub master

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
