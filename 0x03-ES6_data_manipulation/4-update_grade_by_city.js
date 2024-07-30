const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((student) => student.location === city) // Step 1: Filter by city
  .map((student) => {
    // Find the grade for this student from newGrades
    const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);
    // Update student grade or set to 'N/A' if no grade is found
    return {
      ...student, // Copy all properties of the student
      grade: gradeEntry ? gradeEntry.grade : 'N/A',
    };
  });
export default updateStudentGradeByCity;
