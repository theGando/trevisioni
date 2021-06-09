using System;
using System.Collections.Generic;

#nullable disable

namespace Trevisioni.Model
{
    public partial class File
    {
        public string Id { get; set; }
        public string Path { get; set; }
        public string UserId { get; set; }

        public virtual User User { get; set; }
    }
}
