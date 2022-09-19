using SynelTest_13_09.Model;

namespace SynelTest_13_09.Utils;

class FromCsv
{
    public static List<Employee> GetValues(string? filename)
    {
        var path = "C:\\Users\\zuxra\\Desktop\\CourseFullstack\\projects\\SynelTest-13-09\\SynelTest-13-09\\Files";

        if (IsDirectoryEmpty(path))
        {
            return new List<Employee>();
        }

        return File.ReadAllLines(
                path + "\\" + filename)
            .Skip(1)
            .Select(Employee.FromCsv)
            .OrderBy(e => e.Surname) //for sorting ascending order by surname 
            .ToList();
    }

    public static bool IsDirectoryEmpty(string path)
    {
        return !Directory.EnumerateFileSystemEntries(path).Any();
    }
}