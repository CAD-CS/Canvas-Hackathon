import pandas as pd

# read the csv files for discussion data, data are downloaded from threadz
ketchup_or_mustard = pd.read_csv('undefined-1729367955800.csv')
data_question = pd.read_csv('undefined-1729368265087.csv')
Introduction = pd.read_csv('undefined-1729368274591.csv')
general = pd.read_csv('undefined-1729369226154.csv')

# create a new column 'Source' to indicate the source of the data
ketchup_or_mustard['Source'] = 'ketchup_or_mustard'
data_question['Source'] = 'data_question'
Introduction['Source'] = 'Introduction'
general['Source'] = 'general'

# merge all the dataframes into one
combined_df = pd.concat([ketchup_or_mustard, data_question, Introduction, general], ignore_index=True)

# calculate the number of people who participated in each task
task_counts = combined_df['Source'].value_counts().to_dict()

# define a function to calculate the importance score of a task
def calculate_task_score(task, important_tasks, task_counts):
    importance_score = 0.5 if task in important_tasks else 0
    count_score = task_counts.get(task, 0) / len(combined_df)
    return importance_score + count_score

# generate a student list and a important task list For this section instructor can set the important tasks
student_list = ['Frances Li', 'John Smith', 'Alice Johnson', 'Bob Brown', 'Eva Lee', 'Lily Chen']
important_tasks = ['ketchup_or_mustard', 'data_question']

# generate a dictionary to store the tasks participated by each student
student_participation = {}
for student in student_list:
    participated_tasks = combined_df[combined_df['name'] == student]['Source'].unique().tolist()
    student_participation[student] = participated_tasks

# generate a to-do list for each student based on the importance score of each task
to_do_lists = {}
for student in student_list:
    tasks = list(task_counts.keys())
    # exclude the tasks that the student has already participated in
    tasks = [task for task in tasks if task not in student_participation[student]]
    tasks_with_scores = [(task, calculate_task_score(task, important_tasks, task_counts)) for task in tasks]
    sorted_tasks = sorted(tasks_with_scores, key=lambda x: -x[1])  # 按得分降序排序
    to_do_lists[student] = [task for task, score in sorted_tasks]
# store the to-do list into a DataFrame
to_do_df = pd.DataFrame.from_dict(to_do_lists, orient='index').transpose()

to_do_df