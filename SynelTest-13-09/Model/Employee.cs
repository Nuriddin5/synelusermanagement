using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using SynelTest_13_09.Utils;

namespace SynelTest_13_09.Model
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
         public string? PayrollNumber { get; set; }
        public string? Forename { get; set; }
        public string? Surname { get; set; }

        [JsonConverter(typeof(DateOnlyJsonConverter))]
        public DateOnly? DateOfBirth { get; set; }

        public string? Telephone { get; set; }
        public string? Mobile { get; set; }
        public string? Address { get; set; }
        public string? Address2 { get; set; }
        public string? Postcode { get; set; }
        public string? EmailHome { get; set; }

        [JsonConverter(typeof(DateOnlyJsonConverter))]
        public DateOnly? StartDate { get; set; }
        
        
        public static Employee FromCsv(string csvLine)
        {
            string[] values = csvLine.Split(',');
            Employee employee = new Employee
            {
                PayrollNumber = Convert.ToString(values[0]),
                Forename = Convert.ToString(values[1]),
                Surname = Convert.ToString(values[2]),
                DateOfBirth = DateOnly.Parse(values[3]),
                Telephone = Convert.ToString(values[4]),
                Mobile = Convert.ToString(values[5]),
                Address = Convert.ToString(values[6]),
                Address2 = Convert.ToString(values[7]),
                Postcode = Convert.ToString(values[8]),
                EmailHome = Convert.ToString(values[9]),
                StartDate = DateOnly.Parse(values[10])
            };

            return employee;
        }
    }
}