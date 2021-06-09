using System;
using System.Collections.Generic;

#nullable disable

namespace Trevisioni.Model
{
    public partial class User
    {
        public User()
        {
            Artists = new HashSet<Artist>();
            Files = new HashSet<File>();
            StaffAvailabilities = new HashSet<StaffAvailability>();
            StaffRoles = new HashSet<StaffRole>();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public int Type { get; set; }

        public virtual ICollection<Artist> Artists { get; set; }
        public virtual ICollection<File> Files { get; set; }
        public virtual ICollection<StaffAvailability> StaffAvailabilities { get; set; }
        public virtual ICollection<StaffRole> StaffRoles { get; set; }
    }
}
