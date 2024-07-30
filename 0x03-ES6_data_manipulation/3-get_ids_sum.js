const getStudentIdsSum = (students) => {
  if (Array.isArray(students)) {
    return students.reduce((sum, student) => sum + student.id, 0);
  }

  return 0;
};

export default getStudentIdsSum;
