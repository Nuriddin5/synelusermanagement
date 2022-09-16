using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(GetValues());
        }


        static List<Values> GetValues()
        {
            var values = File.ReadAllLines(
                    "C:\\Users\\zuxra\\Desktop\\CourseFullstack\\projects\\SynelTest-13-09\\SynelTest-13-09\\Files\\dataset.csv")
                .Skip(1)
                .Select(Values.FromCsv)
                .ToList();
            return values;
        }


        public class Values
        {
            public string? PayrollNumber { get; set; }
            public string? Forename { get; set; }
            public string? Surname { get; set; }

            public DateTime DateOfBirth { get; set; }

            public string? Telephone { get; set; }
            public string? Mobile { get; set; }
            public string? Address { get; set; }
            public string? Address2 { get; set; }
            public string? Postcode { get; set; }
            public string? EmailHome { get; set; }

            public DateTime StartDate { get; set; }

            public static Values FromCsv(string csvLine)
            {
                string[] values = csvLine.Split(',');
                Values dailyValues = new Values();
                dailyValues.PayrollNumber = Convert.ToString(values[0]);
                dailyValues.Forename = Convert.ToString(values[1]);
                dailyValues.Surname = Convert.ToString(values[2]);

                dailyValues.DateOfBirth = DateTime.Parse(values[3]);
                dailyValues.Telephone = Convert.ToString(values[4]);
                dailyValues.Mobile = Convert.ToString(values[5]);
                dailyValues.Address = Convert.ToString(values[6]);
                dailyValues.Address2 = Convert.ToString(values[7]);
                dailyValues.Postcode = Convert.ToString(values[8]);
                dailyValues.EmailHome = Convert.ToString(values[9]);
                dailyValues.StartDate = DateTime.Parse(values[10]);

                return dailyValues;
            }
        }
    }
}