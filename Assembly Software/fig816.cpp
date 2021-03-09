struct S {
   int x;
   int y;
};
S t;
S ret_struct() {
    S s;
    s.x = 1;
    s.y = 2;
    return s;     // return a struct
}
int main()
{
   t = ret_struct();
}
