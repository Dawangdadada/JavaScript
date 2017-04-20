//排序算法
function fast_sort(a){
	var i,swap,j,k;
	for(i=0;i<a.length-1;i++)
	{
       k=i;
	for(var j=i+1;j<a.length;j++)
	{
		if(a[j]<a[k])
			k=j;
	}
	      if(k!=i){
	      	swap=a[i];
	      	a[i]=a[k];
	      	a[k]=a[i];
	      }
	      return a;
}
   console.log(fast_sort([1,4,6,7]));
