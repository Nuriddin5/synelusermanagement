using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using SynelTest_13_09.Utils;

namespace SynelTest_13_09.NewFolder
{
    public class Employee
    {
        [Key] public string? PayrollNumber { get; set; }
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
    }
}