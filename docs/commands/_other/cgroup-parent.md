####> This option file is used in:
####> podman build, create, pod clone, pod create, run
####> If file is edited, make sure the changes
####> are applicable to all of those.

#### **--cgroup-parent**=_path_

Path to cgroups under which the cgroup for the <<container|pod>> will be created. If the
path is not absolute, the path is considered to be relative to the cgroups path
of the init process. Cgroups will be created if they do not already exist.
